import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Users, BookOpen, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Cognizant Campus Drive',
      description: 'Successfully participated in Cognizant campus recruitment drive',
      category: 'Career',
      year: '2024'
    },
    {
      icon: Trophy,
      title: 'Capgemini Campus Drive',
      description: 'Participated in Capgemini campus recruitment process',
      category: 'Career',
      year: '2024'
    },
    {
      icon: Award,
      title: 'AWS Academy Certification',
      description: 'Completed AWS Academy Cloud Foundations certification program',
      category: 'Certification',
      year: '2024'
    },
    {
      icon: Award,
      title: 'AI/ML Certification',
      description: 'Google AI/ML virtual internship certification through Eduskills',
      category: 'Certification',
      year: '2024'
    },
    {
      icon: Users,
      title: 'Technical Society Member',
      description: 'Active member of Computer Engineering Student Association',
      category: 'Leadership',
      year: '2022-2025'
    },
    {
      icon: BookOpen,
      title: 'Workshop Participation',
      description: 'Attended multiple technical workshops on emerging technologies',
      category: 'Learning',
      year: '2023-2024'
    },
    {
      icon: Star,
      title: 'Project Excellence',
      description: 'Recognition for innovative project development and implementation',
      category: 'Academic',
      year: '2024'
    },
    {
      icon: Target,
      title: 'Hackathon Participation',
      description: 'Participated in college-level hackathons and coding competitions',
      category: 'Competition',
      year: '2023-2024'
    }
  ];

  const categoryColors = {
    'Career': 'bg-blue-100 text-blue-800 border-blue-200',
    'Certification': 'bg-green-100 text-green-800 border-green-200',
    'Leadership': 'bg-purple-100 text-purple-800 border-purple-200',
    'Learning': 'bg-orange-100 text-orange-800 border-orange-200',
    'Academic': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Competition': 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my accomplishments, certifications, and recognitions 
            throughout my academic and professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${categoryColors[achievement.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800'}`}
                    >
                      {achievement.category}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.year}</p>
                  </div>
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="shadow-soft bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I believe in continuous learning and professional development. These achievements 
                represent my commitment to excellence, innovation, and staying current with 
                industry trends. I'm always looking for new opportunities to grow, learn, 
                and contribute to meaningful projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;