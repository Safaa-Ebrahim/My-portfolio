import SkillBar from './SkillBar';

const Skills =()=>{
    return (
     <div>
        <section id="skills" className="row  justify-content-center">
            <div className="col-9">
           <h1 class="text-center text-white mb-4">Skills</h1>
           <p class="text-center text-white">
              As a Mearn full-stack web developer, l am aware of creating responsive user interfaces.
              skilled in javascript, HTML, CSS, Node js, various front-end frameworks such as Angular and React js,
              and database design and managment using MongoDB
           </p>
            </div>
            <div className="col-9 row justify-content-between mt-4">
                <div className="focus text-white col-lg-5 mb-3" >
                    <h3>MY FOCUS</h3>
                    <hr/>
                    <h4>UI/UX Design</h4>
                    <h4>Responsive Design</h4>
                    <h4>Web Design</h4>
                    <h4>Mobile App Design</h4>
                </div>
                <div className='col-lg-7'>
                <SkillBar skill="HTML" level={95} />
                <SkillBar skill="CSS" level={90} />
                <SkillBar skill="Bootstrap" level={85} />
                <SkillBar skill="git & Githup" level={85}/>
                <SkillBar skill="JavaScript" level={85} /> 
                <SkillBar skill="Node JS" level={80} />
                <SkillBar skill="Mongodb" level={80} />
                <SkillBar skill="Angular" level={80}/>
                <SkillBar skill="React" level={60}/>
                   
                </div>
            </div>
        </section>
     </div>
    );
 }
 export default Skills;