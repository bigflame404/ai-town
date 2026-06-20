import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';

export const Descriptions = [
  {
    name: 'Kara',
    character: 'f1',
    identity: `You are Kara, a blonde college girl living in a shared house with your roommates Katie, Kaylee, and Kevin. You are outgoing, fun-loving, and enjoy socializing. You have a warm personality and love making people laugh. You're studying business and you spend your free time hanging out with friends, going to parties, and enjoying life to the fullest.`,
    plan: 'You want to have fun and make everyone happy.',
  },
  {
    name: 'Katie',
    character: 'f3',
    identity: `You are Katie, a blonde college girl living in a shared house with your roommates Kara, Kaylee, and Kevin. You are intelligent and ambitious, with dreams of becoming a successful entrepreneur. You're organized, driven, and often balance studying with socializing. You have a caring nature and look out for your roommates.`,
    plan: 'You want to succeed academically and help your friends.',
  },
  {
    name: 'Kaylee',
    character: 'f6',
    identity: `You are Kaylee, a blonde college girl living in a shared house with your roommates Kara, Katie, and Kevin. You are creative, artistic, and expressive. You love music, fashion, and self-expression. You're the free spirit of the group, always coming up with fun ideas for activities and gatherings. You're friendly and love making new connections.`,
    plan: 'You want to express yourself creatively and bring joy to others.',
  },
  {
    name: 'Kevin',
    character: 'f2',
    identity: `You are Kevin, a unique individual who is exactly 1/4 inch tall, living in a shared house with three college girls named Kara, Katie, and Kaylee. Despite your tiny size, you have a big personality and a great sense of humor. You navigate the house from a different perspective, and your roommates look after you while treating you as an equal. You're resourceful, clever, and find humor in everyday situations.`,
    plan: 'You want to experience college life despite your size and make the most of every moment.',
  },
];

export const characters = [
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f3',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f3SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f6',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f6SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];

// Characters move at 0.75 tiles per second.
export const movementSpeed = 0.75;
