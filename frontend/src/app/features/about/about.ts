import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal';
import {
  TECH_STACK,
  ROADMAP,
  TEAM,
  PROJECT_STATS,
  ARCH_LAYERS,
  REPO_TREE,
  type TechCategory,
  type RoadmapItem,
  type TeamMember,
  type ProjectStat,
  type ArchLayer,
} from './about.models';

@Component({
  selector: 'app-about',
  imports: [NgStyle, RouterLink, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {

  readonly techStack: TechCategory[] = TECH_STACK;
  readonly roadmap: RoadmapItem[]    = ROADMAP;
  readonly team: TeamMember[]        = TEAM;
  readonly stats: ProjectStat[]      = PROJECT_STATS;
  readonly archLayers: ArchLayer[]   = ARCH_LAYERS;
  readonly repoTree                  = REPO_TREE;

  getIconStyle(color: string): Record<string, string> {
    return {
      background: `${color}22`,
      color,
      border: `1px solid ${color}44`,
    };
  }

  getLayerStyle(color: string): Record<string, string> {
    return {
      background: `${color}12`,
      'border-color': `${color}30`,
    };
  }

  getRoadmapStyle(item: RoadmapItem): Record<string, string> {
    if (item.status !== 'current') return {};
    return {
      background: 'rgba(124,58,237,0.10)',
      'border-color': 'rgba(124,58,237,0.30)',
    };
  }
}