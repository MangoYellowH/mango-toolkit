import WithTheme from './WithTheme';

export default function Mango <T>(
  ComponentType: React.ComponentType<T>,
): React.ComponentType<T> {
  return WithTheme(ComponentType, 'mango');
}
