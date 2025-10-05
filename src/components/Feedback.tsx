import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    suggestions: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your valuable feedback!",
    });
    setFormData({ name: '', mobile: '', suggestions: '' });
  };

  return (
    <section id="feedback" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Share Your Feedback
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your feedback helps me improve. Please share your thoughts and suggestions!
          </p>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Feedback Form
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  pattern="[0-9+\s\-()]+"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="suggestions">Suggestions *</Label>
                <Textarea
                  id="suggestions"
                  name="suggestions"
                  placeholder="Share your suggestions or feedback..."
                  rows={6}
                  value={formData.suggestions}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Feedback;
