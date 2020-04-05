import WithTheme from './WithTheme';

export default function Skyline <T>(
  ComponentType: React.ComponentType<T>,
): React.ComponentType<T> {
  return WithTheme(ComponentType, 'skyline');
}
