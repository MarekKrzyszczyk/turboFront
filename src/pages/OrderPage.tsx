import backgroundImage from '../media/turbo.jpg';
import { MainLayout } from './layouts/MainLayout';


export const OrderPage = () => {
  return (
    <MainLayout>
      <div className="relative flex-1 bg-gray-100">
        <picture className="absolute inset-0 opacity-20">
          <img src={backgroundImage} className="object-cover w-full h-full" alt=""/>
        </picture>
      </div>
    </MainLayout>
  );
}

