
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Motion component types
type MotionProps = {
  children: React.ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
};

export const motion = {
  div: ({
    children,
    initial,
    animate,
    exit,
    transition,
    whileHover,
    whileTap,
    className,
    style = {},
    ...props
  }: MotionProps) => {
    const [inlineStyles, setInlineStyles] = useState<React.CSSProperties>({
      ...style,
      ...(initial || {}),
      transition: `all ${(transition?.duration || 0.3)}s ${transition?.ease || 'ease'}`,
    });
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    
    useEffect(() => {
      if (animate) {
        setInlineStyles(prev => ({
          ...prev,
          ...animate,
          transition: `all ${(transition?.duration || 0.3)}s ${transition?.ease || 'ease'}`,
        }));
      }
    }, [animate, transition]);
    
    return (
      <div
        className={className}
        style={inlineStyles}
        onMouseEnter={() => {
          setIsHovered(true);
          if (whileHover) {
            setInlineStyles(prev => ({
              ...prev,
              ...whileHover,
            }));
          }
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (whileHover && animate) {
            setInlineStyles(prev => ({
              ...prev,
              ...animate,
            }));
          }
        }}
        onMouseDown={() => {
          setIsPressed(true);
          if (whileTap) {
            setInlineStyles(prev => ({
              ...prev,
              ...whileTap,
            }));
          }
        }}
        onMouseUp={() => {
          setIsPressed(false);
          if (whileTap && (isHovered ? whileHover : animate)) {
            setInlineStyles(prev => ({
              ...prev,
              ...(isHovered ? whileHover : animate),
            }));
          }
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
  
  h1: ({
    children,
    initial,
    animate,
    transition,
    className,
    style = {},
    ...props
  }: MotionProps) => {
    const [inlineStyles, setInlineStyles] = useState<React.CSSProperties>({
      ...style,
      ...(initial || {}),
      transition: `all ${(transition?.duration || 0.3)}s ${transition?.ease || 'ease'}`,
    });
    
    useEffect(() => {
      if (animate) {
        setInlineStyles(prev => ({
          ...prev,
          ...animate,
          transition: `all ${(transition?.duration || 0.3)}s ${transition?.ease || 'ease'}`,
        }));
      }
    }, [animate, transition]);
    
    return (
      <h1 className={className} style={inlineStyles} {...props}>
        {children}
      </h1>
    );
  },
  
  h2: ({
    children,
    initial,
    animate,
    transition,
    className,
    style = {},
    ...props
  }: MotionProps) => {
    const [inlineStyles, setInlineStyles] = useState<React.CSSProperties>({
      ...style,
      ...(initial || {}),
      transition: `all ${(transition?.duration || 0.3)}s ${transition?.ease || 'ease'}`,
    });
    
    useEffect(() => {
      if (animate) {
        setInlineStyles(prev => ({
          ...prev,
          ...animate,
          transition: `all ${(transition?.duration || 0.3)}s ${transition?.ease || 'ease'}`,
        }));
      }
    }, [animate, transition]);
    
    return (
      <h2 className={className} style={inlineStyles} {...props}>
        {children}
      </h2>
    );
  },
  
  // Add the p component implementation
  p: ({
    children,
    initial,
    animate,
    transition,
    className,
    style = {},
    ...props
  }: MotionProps) => {
    const [inlineStyles, setInlineStyles] = useState<React.CSSProperties>({
      ...style,
      ...(initial || {}),
      transition: `all ${(transition?.duration || 0.3)}s ${transition?.ease || 'ease'}`,
    });
    
    useEffect(() => {
      if (animate) {
        setInlineStyles(prev => ({
          ...prev,
          ...animate,
          transition: `all ${(transition?.duration || 0.3)}s ${transition?.ease || 'ease'}`,
        }));
      }
    }, [animate, transition]);
    
    return (
      <p className={className} style={inlineStyles} {...props}>
        {children}
      </p>
    );
  },
};

export default motion;
