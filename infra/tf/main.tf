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

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

    ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
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
  key_name      = "ssh-key"

  user_data      = <<-EOF
    #!/bin/bash
    sudo su
    sudo yum update -y
    sudo amazon-linux-extras enable nginx1
    sudo yum install -y nginx
    sudo systemctl enable nginx
    sudo systemctl start nginx

    sudo yum install -y nodejs
    npm install -g pm2

    cd /web-ifsp
    cd /web-ifsp-project-v2

    git pull

    npm install
    npm run build

    pm2 start npm --name "web-ifsp" -- run start
    pm2 startup
    pm2 save
  EOF

  vpc_security_group_ids = [aws_security_group.securitygroup.id]

  tags = {
    Environment = var.env
    Project     = var.project_name
    Name        = var.ec2_name
    ManagedBy   = "terraform"
  }
}
