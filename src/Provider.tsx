import { QueryProvider } from '@/providers/QueryProvider';

interface Props {
  children: React.ReactNode;
}
const Provider = ({ children }: Props) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Provider;
