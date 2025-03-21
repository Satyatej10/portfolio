function About() {
    return (
      <section id="about" className="min-h-screen pt-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              I'm a passionate React developer with experience in building modern web applications 
              using HTML, JavaScript, and Tailwind CSS. I specialize in creating responsive, 
              user-friendly interfaces that provide excellent user experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-gray-600">B.Sc. in Computer Science</p>
                <p className="text-gray-500 text-sm">[Your University] - [Year]</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Experience</h3>
                <p className="text-gray-600">Frontend Developer</p>
                <p className="text-gray-500 text-sm">[Company] - [Duration]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;