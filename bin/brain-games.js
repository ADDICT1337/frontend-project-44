#!/usr/bin/env node
import nameUser from '../src/cli.js';

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  nameUser();
};

greetingUser();