import { motion } from 'framer-motion';

import { createPortal } from 'react-dom';

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog open className="modal" 
        // initial = {{opacity: 0, y: 30}}
        // animate = {{opacity: 1, y: 0 }}
        // exit = {{opacity: 0, y: 30}}
        variants={{
          hidden: {opacity: 0, y: 30},
          visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
