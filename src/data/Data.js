const portfolioData = {
    profile: {
      name: "Adel Noval Al Farizi",
      handle: "@nofalfarizi",
      location: "Banyuwangi, Indonesia",
      status: "Onsite",
      homeBio: "Passionate with a strong focus on frontend development. Proficient in Reactjs and PhP in all aspects of web technologies. Collaborative team player dedicated to delivering efficient, scalable, and visually appealing web applications.",
      aboutBio: [
        "Hello there! Thank you for visiting my personal website. I'm Nofal Farizi, a student majoring in Informatics at the University of Jember. I have a strong interest in frontend development. With a solid foundation in JavaScript and PhP, as well as a comprehensive understanding of various frontend libraries and frameworks, I have navigated the ever-evolving landscape of web development with enthusiasm and dedication.",
        "I focus on creating web applications that not only provide precise experiences but are also user-friendly. My specialization includes HTML,CSS,JavaScript and PHP along with frameworks such as React, Vite, and Laravel. As a quick learner and adaptive thinker, I thrive in a dynamic environment where innovation is a driving force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only to my technical skills but also embodying a humble attitude that values input from every team member.",
        "I strongly believe that effective communication is crucial for success in any role. I am adaptable, think efficiently, and always strive for the best. My experiences have equipped me with analytical skills and strong leadership abilities. I am comfortable working collaboratively in a team and am excited about the opportunity to contribute to team success. Looking forward to the possibility of collaboration!"
      ]
    },
     skills: ["PostgreSQL", "Laravel", "Github", "TailwindCSS", "Bootstrap", "Phyton", "HTML", "Reactjs", "Architect Enterprise", "Vite", "CSS", "Git", "Adobe Premiere Pro", "After Effect", "Davinci Resolve", "Capcut"],   
   career: [
  {
    id: 1,
    title: "Head of Content Creator Division",
    company: "Himpunan Mahasiswa Informatika Universitas Jember (HMIF UNEJ)",
    location: "Jember, Indonesia",
    duration: "Dec 2022 - Present ⋅ 2 Years, 7 Months",
    type: "Part-time ⋅ Onsite",
    logo: "img/HMIF.png",
    loading :"lazy",
    responsibilities: [
      "Leading the Content Creator Division to manage digital presence and branding of HMIF UNEJ.",
      "Planning and supervising the production of social media content and visual design.",
      "Collaborating with other departments for event promotions and documentation."
    ]
  },
  {
    id: 2,
    title: "Front End Developer",
    company: "MasCitra Teknologi Indonesia",
    location: "Jember, Indonesia",
    duration: "Mar 2025 - Jul 2025 ⋅ 4 Months",
    type: "Full-Time ⋅ Onsite",
    logo: "img/Picture1.png",
      loading :"lazy",
    responsibilities: [
      "Developed responsive front-end interfaces using HTML, CSS, JavaScript, and Bootstrap.",
      "Sliced UI designs from Figma into fully functional, client-ready web pages.",
      "Collaborated with a 4-person team to develop government-related web applications.",
      "Ensured cross-browser compatibility and optimized performance for target users."
    ]
  },
  {
    id: 3,
    title: "Capstone Project",
    company: "Fakultas Ilmu Komputer",
    location: "Jember, Indonesia",
    duration: "Aug 2024 - Nov 2024 ⋅ 3 Months",
    type: "Project ⋅ Full-Time",
      loading :"lazy",
    logo: "https://placehold.co/50x50/E2E8F0/4A5568?text=A",
    responsibilities: [
      "Developed core features using React.js for a faculty-based web application.",
      "Implemented interactive UI components and optimized UX flows.",
      "Led UI/UX enhancement based on user feedback and usability tests.",
      "Maintained code quality and collaborated using Git version control."
    ]
  }
],
    education: { university: "Jember University", degree: "Bachelor's degree ⋅ Informatics,", duration: "2022 - Present", location: "Jember, Indonesia", logo: "img/UNEJ.png" },
    projects: [
      { id: 1, title: "Sistem Kepegawaian",slug: "sistem-kepegawaian", description: "This Employee Management System simplifies HR processes including performance evaluation, warning letter generation, and online asset borrowing. Built to improve efficiency and transparency in HR operations.",sourceCodeUrl: '#',
       image: "/img/kepegawaian.png",  loading :"lazy", featured: true, tech: ["Laravel", "HTML","CSS","JavaScript","PHP"] },
      { id: 2, title: "Personal Website",slug:"personal-website", description: "Personal website & portfolio, built using React.JS,TailwindCSS", sourceCodeUrl: 'https://github.com/Biggze/Porto-react',
      image: "/img/porto.png",  loading :"lazy", featured: true, tech: ["ReactJS","TailwindCSS"] },
      { id: 3, title: "Pengembangan Capstone",sourceCodeUrl: '#',
      slug: "pengembangan-capstone",  loading :"lazy", description: "A website designed to help lecturers easily manage student data for those who have registered or will register for the capstone project.", image: "/img/capstone.png", featured: false, login: true, tech: ["ReactJS", "ExpressJS", "Tailwind"] },
      { id: 4, title: "Sipetani",  loading :"lazy",slug: "sipetani", description: "A website designed to assist farmers in predicting soil pH levels, which helps determine whether the land is suitable for planting certain crops, using Artificial Intelligence.", sourceCodeUrl: 'https://github.com/ASyarifH/PPL_E3',
      image: "/img/Sipetani.png", featured: false, tech: ["Laravel", "HTML", "CSS","JavaScript"] },
      { id: 5, title: "Kamera",  loading :"lazy",slug: "kamera", description: "A website designed as an e-commerce platform for electronic camera transactions, assisting users in ordering various types of cameras and tripods, while also enabling partners to monitor their products and delivery status.",
      sourceCodeUrl: 'https://github.com/Biggze/Kamera',
       image: "/img/kamera.png", featured: false, tech: ["Laravel", "HTML", "Tailwind","JavaScript"] }
    ],

  certificates : [
{
  id: 2,
  title: 'Informatics Olympiad', 
  issuer: 'Himpunan Mahasiswa Informatika Universitas Jember',
  role: 'Ketua Panitia', 
  year: '2022',
  imageUrl: '/img/IO.png',
    loading :"lazy",
  description: '...',
  jobdesk: '...'
},
{
  id: 3,
  title: 'IF Order',
  issuer: 'Himpunan Mahasiswa Informatika Universitas Jember',
  role: 'Coordinator Perlengkapan', 
  year: '2022',
  imageUrl: '/img/diklat.png',
    loading :"lazy",
  description: '...',
  jobdesk:""
},
{
  id: 4,
  title: 'Informatics Olympiad',
  issuer: 'Himpunan Mahasiswa Informatika Universitas Jember',
  role: 'Coordinator Perlengkapan', 
  year: '2022',
  imageUrl: '/img/io23.png',
    loading :"lazy",
  description: '...',
  jobdesk:""
},
{
  id: 4,
  title: 'Himpunan Mahasiswa Informatika Universitas Jember',
  issuer: 'Universitas Jember',
  role: 'Kepala Divisi Content Creator', 
  year: '2025',
  imageUrl: '/img/sertifhmif.png',
    loading :"lazy",
  description: '...',
  jobdesk:""
}
],
    editingProjects: [
    {
      id: 1,
      title: "Cinematic Travel Vlog - Bali",
      description: "A short cinematic video capturing the beauty of Bali, edited with a focus on color grading and smooth transitions.",
      thumbnailUrl: "https://placehold.co/600x400/3498db/ffffff?text=Travel+Vlog",
      videoUrl: "#", 
      tools: ["Adobe Premiere Pro", "After Effect"]
    },
    {
      id: 2,
      title: "Product Commercial: Coffee Beans",
      description: "A dynamic and fast-paced commercial for a local coffee brand. Edited using Davinci Resolve.",
      thumbnailUrl: "https://placehold.co/600x400/e67e22/ffffff?text=Product+Ad",
      videoUrl: "#",
      tools: ["Davinci Resolve"]
    },
    {
      id: 3,
      title: "Short Content Reel for Instagram",
      description: "A vertical short video compilation for Instagram Reels, edited quickly and efficiently using Capcut.",
      thumbnailUrl: "https://placehold.co/600x400/9b59b6/ffffff?text=Instagram+Reel",
      videoUrl: "#",
      tools: ["Capcut"]
    },
    {
      id: 4,
      title: "Motion Graphics Explainer",
      description: "An animated explainer video using motion graphics to simplify a complex topic. Created entirely in After Effects.",
      thumbnailUrl: "https://placehold.co/600x400/2ecc71/ffffff?text=Motion+Graphics",
      videoUrl: "#",
      tools: ["After Effect"]
    }
  ],


  
  
  };
  

  export default portfolioData;