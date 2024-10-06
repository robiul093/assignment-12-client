# SurveyHub

A user-friendly survey platform that allows you to create, distribute, and analyze surveys with ease.

## Live Demo
Check out the live site: [SurveyHub Live](https://assignment-12-33727.web.app)

## User Roles and Permissions
SurveyHub supports multiple user roles with specific permissions:

- **User**: Can vote on surveys and report any survey they find inappropriate.
- **Surveyor**: Can create new surveys and share them with users.
- **ProUser**: Has all the permissions of a regular user, with additional rights to comment on surveys.
- **Admin**: Manages platform settings, including user roles and permissions, and can unpublish surveys or remove inappropriate content.

## Usage
1. **Create a Survey**: Log in to create new surveys with custom questions.
2. **Distribute Your Survey**: Share the survey link or embed it on your website.
3. **Analyze Responses**: Access real-time response data and export for analysis.
4. **Payments**: Optionally, accept payments via Stripe for premium surveys.
5. **Rating**: User can add rating on the survey.

## Technologies Used
- **React**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Component library for Tailwind CSS.
- **React Router DOM**: Handles routing within the app.
- **React Hook Form**: For managing form state and validation.
- **Swiper Slider**: For creating interactive and responsive sliders.
- **Firebase**: User authentication and frontend deployment.
- **TanStack Query**: Data fetching and state management.
- **Stripe**: Secure payment processing.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
