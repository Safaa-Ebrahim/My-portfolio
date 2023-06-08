import pdf from "../assets/files/Safaa_Mahmoud_Ebrahim CV.pdf"
const AboutMe =()=>{

    return (
     <div>
        <section id="about" className="row">
            <div className="col-md-4">
                <h1 className="text-center">About Me </h1>
            </div>
            <div className="col-md-7 mx-3">
                <p>
                Hello! My name is Safaa. I'm 23 years old. 
                I studied electronic engineering at mansoura university. After graduation, I start to study web development, l joined a web design course at Nti 
                and then l joined the Mean full stack track at ITI Mansoura.
                </p>
                 <a href={pdf} download><button className="btn btn-primary">Download My Resume</button></a>    
                 {/* <a href="cv.pdf" download><button className="btn btn-primary">Download My Resume</button></a>     */}
                   
            </div>
        </section>
     </div>
    );
 }
 export default AboutMe;