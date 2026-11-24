/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group bg-[#F5F5F5] rounded-[24px] p-5 md:p-6 flex flex-col transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <button
        type="button"
        onClick={onClick}
        className="text-left flex flex-col flex-1 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F5F5] rounded-[16px] cursor-pointer"
      >
        {/* 4:3 Template Preview Frame */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] bg-white border border-[#EAEAEA]">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-[#F7F3E8] text-black">
              <Layers className="w-8 h-8 mb-3" />
              <span className="text-[20px] fw-540 text-center">{project.title}</span>
            </div>
          )}
        </div>

        {/* Editorial Body */}
        <div className="pt-6 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-[12px] leading-none tracking-[0.6px] uppercase text-black mb-3 tabular-nums">
              <span>{project.category}</span>
              <span aria-hidden="true">/</span>
              <span>{project.year}</span>
            </div>

            <h3 className="text-[24px] fw-700 leading-[1.3] tracking-[-0.01em] text-black mb-2.5 text-balance">
              {project.title}
            </h3>

            <p className="text-[16px] fw-330 leading-[1.45] tracking-[-0.14px] text-black mb-6">
              {project.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-[#D9D9D9] flex items-center justify-between gap-4">
            <span className="font-mono text-[12px] tracking-[0.4px] uppercase text-black truncate">
              {project.stack.slice(0, 3).join(' · ')}
            </span>
            <span className="w-10 h-10 rounded-full bg-white text-black border border-[#D9D9D9] group-hover:bg-black group-hover:text-white group-hover:border-black inline-flex items-center justify-center shrink-0 transition-colors duration-150">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </button>
    </article>
  );
};

export default ProjectCard;
