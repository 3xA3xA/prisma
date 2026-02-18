import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal';
import {
  MODELS,
  FEATURES,
  ARENA_ITEMS,
  type Model,
  type Feature,
  type ArenaItem,
} from './landing.models';

@Component({
  selector: 'app-landing',
  imports: [NgStyle, ScrollRevealDirective],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class LandingComponent {

  readonly models: Model[]         = MODELS;
  readonly features: Feature[]     = FEATURES;
  readonly arenaItems: ArenaItem[] = ARENA_ITEMS;

  constructor(private router: Router) {}

  goToChat():  void { this.router.navigate(['/chat']);  }
  goToArena(): void { this.router.navigate(['/arena']); }

  getModelIconStyle(color: string): Record<string, string> {
    return {
      background: `${color}22`,
      color,
      border: `1px solid ${color}44`,
    };
  }

  getModelTagStyle(color: string): Record<string, string> {
    return {
      background: `${color}18`,
      color,
      border: `1px solid ${color}30`,
    };
  }

  getArenaAvatarStyle(color: string): Record<string, string> {
    return {
      background: `${color}22`,
      color,
      border: `1px solid ${color}44`,
    };
  }
}