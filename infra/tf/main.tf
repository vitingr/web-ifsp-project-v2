terraform {
  required_version = ">=1.0.0"
  backend "s3" {
    bucket  = var.aws_bucket_name
    key     = var.aws_bucket_key
    region  = var.region
    encrypt = true

    assume_role {
      role_arn = var.role_arn
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.22.0"
    }
  }
}

resource "aws_security_group" "securitygroup" {
  name        = "securitygroup"
  description = "Allow HTTP and Internet Access"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "server" {
  ami           = "ami-05b10e08d247fb927"
  instance_type = "t2.micro"
  key_name      = "app-ssh-key"

  vpc_security_group_ids = [aws_security_group.securitygroup.id]

  tags = {
    Environment = var.env
    Project     = var.project_name
    Name        = var.ec2_name
    ManagedBy   = "terraform"
  }
}
