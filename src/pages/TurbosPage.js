import { observer } from 'mobx-react-lite';
import { MainLayout } from './layouts/MainLayout';


export const TurbosPage = observer(() => {
  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-2xl px-10 py-10">
        <h4 className="text-xl font-medium text-gray-800">Turbosprężarki</h4>

        <div className="mt-10 text-gray-500 italic text-center">
          - Brak danych -
        </div>
      </div>
    </MainLayout>
  );
});