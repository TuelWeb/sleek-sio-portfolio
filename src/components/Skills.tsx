
import resumeData from '@/data/resumeData';

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const percentage = (level / 5) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-sm text-gray-500">{level}/5</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary-teal rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  // Split skills into two columns
  const midPoint = Math.ceil(resumeData.skills.length / 2);
  const firstColumnSkills = resumeData.skills.slice(0, midPoint);
  const secondColumnSkills = resumeData.skills.slice(midPoint);
  
  return (
    <section id="competences" className="py-20 bg-gradient-skills">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary-teal">Compétences</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {firstColumnSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
            
            <div>
              {secondColumnSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-primary-teal">
              Autres compétences
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {["Communication", "Travail d'équipe", "Gestion de projet", "Méthodes agiles", 
                "Analyse de problèmes", "Veille technologique", "Documentation", "Anglais professionnel"].map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
