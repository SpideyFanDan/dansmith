# Dan Smith's Portfolio Website & Blog

My personal portfolio and blog website made with JavaScript and Node.

## Goals

Create a functional website with information pertinent to my growth and expertise as a software developer and project manager. This website will includes the following:

- Landing Page - Dan Smith Intro
- Portfolio - videos of coding projects with explanation and links
- Blog page - blogs I've written with most current blog at the top
- Resume - page with my resume information (webpage-designed and pdf link)
- About me page

## User Stories

1. As a visitor, I want to see info about the site owner immediately upon entering the site.
2. As a visitor, I want to see a navigation bar with links to various pages on the website.
3. As a visitor, I want to see a list of blog posts on the blog page with navigation options of blog topics.
4. As a visitor, I want to view an individual blog post when I click on it.
5. As a visitor, I want to be able to download a copy of the resume as a pdf.
6. As a visitor, I want to read more about the site owner on a separate about me page.
7. As an admin, I want to add a new blog post so that I can easily add content to my blog and update my resume page.

## User Flow

![Image of userflow](https://github.com/SpideyFanDan/dansmith-portfolio-blog/blob/main/Assets/portfolio-adminuserflow.jpg)

## Wireframes

### Home Page

![Image of homepage wireframe](https://github.com/SpideyFanDan/dansmith-portfolio-blog/blob/main/Assets/home.jpg)

### Blog Main Page

![Image of blog main wireframe](https://github.com/SpideyFanDan/dansmith-portfolio-blog/blob/main/Assets/blog-main.jpg)

### Blog New Post Creation Page

![Image of blog new post wireframe](https://github.com/SpideyFanDan/dansmith-portfolio-blog/blob/main/Assets/blog-new-post.jpg)

## Technical Requirements

- Front End using JavaScript
- Back End using NodeJS
  - REST API
- Database
  - JSON
- API Endpoints
  - Get list of Blog Posts
    - "api/posts"
  - Get Individual Blog
    - "api/posts/:post_id
  - Post Blog Post
    - "api/posts"
  - Get resume
    - "api/resume"
  - Update resume
    - "api/resume"
