# arn:aws:iam::412898606600:role/web-ifsp-terraform-aws-tfstates-role
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "Ubuntu"
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
    encrypt = true
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
