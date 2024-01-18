import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

type IconsProps = PropsWithChildren<{
  name: string;
  size: number;
  color: string;
  solid: boolean;
  style?:any;
}>;

function Icons({name, size, color, solid,style}: IconsProps) {
  switch (name) {
    case 'circle':
      return <Icon style={style ? style : {}} name="circle" size={size} color={color} solid={solid} />;
    case 'envelope':
      return <Icon style={style ? style : {}} name="envelope" size={size} color={color} solid={solid} />;
    case 'lock-close':
      return <Icon style={style ? style : {}} name="lock" size={size} color={color} solid={solid} />;
    case 'lock-open':
      return <Icon style={style ? style : {}} name="lock-open" size={size} color={color} solid={solid} />;
    case 'eye' :
      return <Icon style={style ? style : {}} name="eye" size={size} color={color} solid={solid} />;
  }
}

export default Icons;
