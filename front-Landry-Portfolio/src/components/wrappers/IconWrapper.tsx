import React from 'react';

interface StyleProps {
  width?: number;
  height?: number;
  fill?: string;
  opacity?: number;
}

interface IconWrapperProps<T> {
  IconComponent: React.ComponentType<T>;
  style?: StyleProps;
}

const IconWrapper = <T extends { style?: StyleProps }>({
  IconComponent,
  style = {},
}: IconWrapperProps<T>) => {
  return <IconComponent {...{ style } as T} />;
};

export default IconWrapper;
