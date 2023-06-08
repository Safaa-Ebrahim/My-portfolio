import pdf from "../assets/files/Safaa_Mahmoud_Ebrahim CV.pdf"
const AboutMe =()=>{

    return (
     <div>
        <section id="about" className="row">
            <div className="col-md-4">
                <h1 className="text-center">About Me </h1>
            </div>
            <div className="col-md-7 mx-3">
                <p>In the above example, two shadows 
                    are used to create a "embossed" effect. 
                    The first shadow is a black shadow with a
                     positive offset, while the second shadow is a 
                     white shadow with a negative offset. Together,
                      they create the illusion of raised text.</p>
                 <a href={pdf} download><button className="btn btn-primary">Download My Resume</button></a>    
                 {/* <a href="cv.pdf" download><button className="btn btn-primary">Download My Resume</button></a>     */}
                   
            </div>
        </section>
     </div>
    );
 }
 export default AboutMe;