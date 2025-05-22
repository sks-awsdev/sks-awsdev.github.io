document.addEventListener('DOMContentLoaded', function() {
    // Scroll to content from landing page
    document.querySelector('.scroll-prompt').addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('.container').offsetTop,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // If it's a section, open it
                if (targetElement.classList.contains('glossy-card')) {
                    const header = targetElement.querySelector('.section-header');
                    const content = targetElement.querySelector('.section-content');
                    content.classList.add('open');
                    header.classList.add('active');
                }
            }
        });
    });

    // Section toggle functionality
    const sections = document.querySelectorAll('.glossy-card');
    
    sections.forEach(section => {
        const header = section.querySelector('.section-header');
        const content = section.querySelector('.section-content');
        const icon = header.querySelector('.toggle-icon');
        
        header.addEventListener('click', () => {
            content.classList.toggle('open');
            header.classList.toggle('active');
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Populate skills dynamically
    const skillsData = {
        "Cloud Platforms": [
            "AWS (EC2, S3, IAM, VPC, RDS, ELB)",
            "Auto Scaling, CloudWatch, CloudFront",
            "Route 53, Lambda"
        ],
        "DevOps Tools": [
            "Jenkins (Freestyle, Pipelines)",
            "Git, GitHub, GitLab",
            "Docker, Terraform, Ansible (Basics)",
            "Kubernetes (Intro), Helm"
        ],
        "CI/CD": [
            "Jenkins Pipelines",
            "GitHub Webhooks",
            "GitLab CI (Intro)",
            "Shell Scripting, YAML",
            "Docker Hub Integration"
        ],
        "Infrastructure as Code": [
            "Terraform (Modules, State Management)",
            "AWS CloudFormation (Basics)"
        ],
        "Monitoring & Logging": [
            "Prometheus, Grafana",
            "AWS CloudWatch",
            "ELK Stack (Intro)"
        ],
        "Other Skills": [
            "Linux (Amazon Linux, Ubuntu, CentOS)",
            "Windows (Basics)",
            "Bash, Python (Basics for Automation)"
        ]
    };

    const skillsGrid = document.querySelector('.skills-grid');
    for (const [category, skills] of Object.entries(skillsData)) {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        const heading = document.createElement('h3');
        heading.textContent = category;
        
        const list = document.createElement('ul');
        skills.forEach(skill => {
            const item = document.createElement('li');
            item.textContent = skill;
            list.appendChild(item);
        });
        
        skillCategory.appendChild(heading);
        skillCategory.appendChild(list);
        skillsGrid.appendChild(skillCategory);
    }

    // Populate projects dynamically
    const projectsData = [
        {
            title: "CI/CD Pipeline with Jenkins & Docker",
            description: "Built an end-to-end CI/CD pipeline using Jenkins to automate code pulls from GitHub, build Docker images, push to Docker Hub, and deploy web apps on AWS EC2.",
            impact: "Integrated automated testing, reducing deployment time by 40% and enhancing release reliability."
        },
        {
            title: "AWS VPC 2-Tier Architecture",
            description: "Designed a secure VPC with public/private subnets, NAT Gateway, route tables, and security groups, enabling scalable EC2 deployments in a production-grade environment with high availability and fault tolerance."
        },
        {
            title: "S3 Static Website Hosting",
            description: "Deployed a portfolio site on AWS S3 with optimized bucket policies and CloudFront for low-l
