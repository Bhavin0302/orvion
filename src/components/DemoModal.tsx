import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>See Orvion in Action</DialogTitle>
          <DialogDescription>
            Watch how easy it is to find projects, communicate with clients, and get paid on Orvion
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
          {/* Placeholder for video - in production this would be an actual video */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1527698266440-12104e498b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyODU5NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Orvion Demo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors group">
              <Play className="w-8 h-8 text-[#2563eb] ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm text-gray-900 mb-1">Duration</h4>
              <p className="text-sm text-gray-600">2 minutes</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-900 mb-1">Topics covered</h4>
              <p className="text-sm text-gray-600">Project matching, payments, support</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
