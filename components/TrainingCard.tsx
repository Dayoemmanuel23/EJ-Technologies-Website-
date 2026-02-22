import React from 'react';
import { TrainingCourse } from '../types';
import { Check, Clock } from 'lucide-react';
import Button from './Button';
import { HashLink } from 'react-router-hash-link';

interface TrainingCardProps {
  course: TrainingCourse;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ course }) => {
  // No longer needed: scrollToContact

  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Header */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors"></div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue flex items-center gap-1 shadow-sm">
          <Clock size={12} />
          {course.duration}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Title & Icon */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
            <course.icon size={20} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 leading-tight">
            {course.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
          {course.description}
        </p>

        {/* Modules List */}
        <div className="bg-slate-50 rounded-xl p-4 mb-6">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Key Modules</h4>
          <ul className="space-y-2">
            {course.modules.map((module, idx) => (
              <li key={idx} className="flex items-start text-xs font-medium text-slate-700">
                <Check size={14} className="text-brand-green mr-2 shrink-0 mt-0.5" strokeWidth={3} />
                <span>{module}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action */}
        <HashLink smooth to="/#contact" className="w-full">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full justify-center group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue"
          >
            Enroll Now
          </Button>
        </HashLink>
      </div>
    </div>
  );
};

export default TrainingCard;