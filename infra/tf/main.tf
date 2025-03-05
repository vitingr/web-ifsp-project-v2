data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/*20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

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

resource "aws_instance" "server" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  key_name      = "app-ssh-key"

  tags = {
    Environment = var.env
    Project     = var.project_name
    Name        = var.ec2_name
    ManagedBy   = "terraform"
  }
}
