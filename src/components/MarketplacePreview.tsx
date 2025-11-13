import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Search, Calendar, DollarSign } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

export function MarketplacePreview() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const projects = [
    {
      id: '1',
      title: 'E-commerce product listing — 150 products',
      price: '₹12,000',
      deadline: '3 days',
      skills: ['Shopify', 'Data entry', 'SEO']
    },
    {
      id: '2',
      title: 'Mobile app UI design for fitness tracker',
      price: '₹25,000',
      deadline: '5 days',
      skills: ['Figma', 'UI Design', 'Mobile']
    },
    {
      id: '3',
      title: 'WordPress website migration and optimization',
      price: '₹8,500',
      deadline: '2 days',
      skills: ['WordPress', 'PHP', 'MySQL']
    },
    {
      id: '4',
      title: 'Content writing for tech blog — 10 articles',
      price: '₹15,000',
      deadline: '7 days',
      skills: ['Content Writing', 'SEO', 'Tech']
    },
    {
      id: '5',
      title: 'React dashboard development',
      price: '₹35,000',
      deadline: '10 days',
      skills: ['React', 'TypeScript', 'Tailwind']
    },
    {
      id: '6',
      title: 'Social media graphics package',
      price: '₹6,000',
      deadline: '4 days',
      skills: ['Photoshop', 'Illustrator', 'Design']
    }
  ];

  const handleGrabProject = (projectId: string) => {
    setSelectedProject(projectId);
    setShowConfirmDialog(true);
  };

  const handleConfirm = () => {
    setShowConfirmDialog(false);
    // Show success message
    alert('Project reserved successfully! Check your dashboard.');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Browse available projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Thousands of projects matching your skills, updated in real-time
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search projects — skills, title or tag"
              className="pl-12 h-14 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:shadow-lg transition-all duration-300"
            />
          </div>
        </div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
            >
              <div className="space-y-4">
                <h3 className="text-lg text-gray-900 line-clamp-2 min-h-[3.5rem]">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>{project.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{project.deadline}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-[#0ea5a4] to-[#2563eb] text-white hover:opacity-90 transition-opacity rounded-lg"
                  onClick={() => handleGrabProject(project.id)}
                >
                  Grab Project
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-lg hover:border-[#06b6d4] hover:text-[#06b6d4] transition-colors"
          >
            View all projects
          </Button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Grab this project?</DialogTitle>
            <DialogDescription>
              Reserve this project for 24 hours. You'll be able to communicate with the client and start work immediately.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-3 sm:gap-3">
            <Button 
              variant="outline" 
              onClick={() => setShowConfirmDialog(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleConfirm}
              className="flex-1 bg-gradient-to-r from-[#0ea5a4] to-[#2563eb] text-white"
            >
              Proceed
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
