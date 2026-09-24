'use client';
import { motion } from 'motion/react';
import React from 'react';

import Brandcontainer from '../Brandcontainer/Brandcontainer';

export default function HeroContainer() {
  return (
    <>
      {/* middle  */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 100,
          delay: 0.6,
        }}
        viewport={{ once: true }}
      >
        <Brandcontainer />
      </motion.div>
    </>
  );
}
