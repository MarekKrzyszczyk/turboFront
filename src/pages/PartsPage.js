import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { MainLayout } from './layouts/MainLayout';


export const PartsPage = observer(() => {
  const store = useStore();
  const parts = store.parts.slice().sort((a, b) => a > b ? -1 : 1);
  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-2xl px-10 py-10">
        <h4 className="text-xl font-medium text-gray-800">Części zamienne</h4>

        <div className="mt-8 -mx-4">
          {parts.map(part => (
            <div className="px-4 py-1 hover:bg-blue-50 cursor-pointer">
              {part.name}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
});