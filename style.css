/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
  scroll-behavior: smooth;
}

body {
  background: #f5f5f5;
  color: #222;
  transition: background 0.3s, color 0.3s;
}

body.dark {
  background: #121212;
  color: #eee;
}

/* Navbar */
#navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

body.dark #navbar {
  background: rgba(30, 30, 30, 0.9);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links li a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

.nav-links button {
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background: #333;
  color: #fff;
  border-radius: 4px;
}

body.dark .nav-links button {
  background: #ddd;
  color: #111;
}

/* Sections */
.section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: auto;
}

.home-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  text-align: center;
}

.intro-text h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.intro-text p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.demo-text {
  color: #ff5722;
  font-weight: bold;
}

.intro-text button {
  margin-top: 1rem;
  padding: 10px 20px;
  background: #4caf50;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
}

.intro-text button:hover {
  background: #388e3c;
}

/* Benefits Grid */
.benefits-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}

.benefits-grid > div {
  flex: 1;
  min-width: 250px;
}

/* Inspiration Cards */
.inspiration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 1rem;
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(50px);
}

.card.reveal {
  opacity: 1;
  transform: translateY(0);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.card h4 {
  margin: 0.5rem 0;
}

/* Testimonials */
.testimonial-carousel {
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  scroll-snap-type: x mandatory;
  padding: 1rem 0;
}

.testimonial-carousel > div {
  flex: 0 0 300px;
  scroll-snap-align: center;
  background: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 10px;
}

/* Form */
form {
  display: grid;
  gap: 1rem;
  max-width: 400px;
  margin-top: 2rem;
}

form input, form select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

form button {
  background: #2196f3;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}

form button:hover {
  background: #1976d2;
}

/* Footer */
footer {
  text-align: center;
  padding: 2rem 1rem;
  background: #f0f0f0;
}

body.dark footer {
  background: #1e1e1e;
}

#backToTop {
  margin-top: 1rem;
  padding: 8px 12px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Media Queries */
@media (max-width: 768px) {
  .nav-links {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  }
