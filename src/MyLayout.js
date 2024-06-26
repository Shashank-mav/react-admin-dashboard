// src/MyLayout.js
import React from 'react';
import { Layout } from 'react-admin';
import { MyAppBar } from './MyAppBar';

export const MyLayout = (props) => (
  <Layout {...props} appBar={MyAppBar} />
);
