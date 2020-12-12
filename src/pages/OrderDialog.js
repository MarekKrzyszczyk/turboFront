import clsx from "clsx";
import { OrderStatus } from "../store/models";
import { openModal } from "../components/overlays";
import { observer } from "mobx-react-lite";
import { AccountHardHatIcon, AccountTieIcon, CalendarIcon, CarTurbochargerIcon, CheckboxBlankCircleOutline, CheckCircleOutlineIcon, ClockOutlineIcon, CloseIcon, CommentTextOutlineIcon, FaceAgentIcon, MessageAlertOutlineIcon, ProgressWrenchIcon, TrashCanOutlineIcon, UnfoldMoreHorizontalIcon } from "../components/icons";
import { orderStatusName } from "../utils/helpers";

const OrderDialog = observer(({ order, close }) => {
  const statusClassName = clsx({
    'bg-blue-300': order.status === OrderStatus.new,
    'bg-yellow-300': order.status === OrderStatus.inProgress,
    'bg-green-400': order.status === OrderStatus.done,
  });
  const statusIcon = {
    [OrderStatus.new]: <CheckboxBlankCircleOutline size={24}/>,
    [OrderStatus.inProgress]: <ProgressWrenchIcon size={24}/>,
    [OrderStatus.done]: <CheckCircleOutlineIcon size={24}/>,
  }[order.status];
  return (
    <div className="relative bg-white rounded-lg shadow-xl min-h-8" style={{width: 740}}>
      <div className="absolute top-2 right-2">
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-200 focus:outline-none transition-colors" onClick={()=> close()}><CloseIcon/></button>
      </div>
      <header className="px-6 py-4 bg-gray-100 rounded-t-lg">
        <div className="font-semibold">Zamówienie 000{order.id}</div>
      </header>

      <div className="flex items-stretch py-4 px-2">
        <div className="flex-1">
          <div className="flex my-4">
            <label className="block mx-4" style={{flex: '2'}}>
              <div className="text-xs text-gray-500">Data</div>
              <div className="flex items-center">
                <div className="opacity-50 w-10"><CalendarIcon/></div>
                <input type="text" defaultValue="4.12.2020" className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid"/>
              </div>
            </label>

            <label className="block mx-4" style={{flex: '1'}}>
              <div className="text-xs text-gray-500">Godzina</div>
              <div className="flex items-center">
                <div className="opacity-50 w-10"><ClockOutlineIcon/></div>
                <input type="text" defaultValue="10:30" className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid"/>
              </div>
            </label>
          </div>

          <label className="block mx-4 my-4">
            <div className="text-xs text-gray-500">Status</div>
            <div className="flex items-center">
              <div className="w-10">
                <span className={`inline-block rounded p-0.5 ${statusClassName}`}>
                  <span className="block opacity-40">{statusIcon}</span>
                </span>
              </div>
              <input type="text" defaultValue={orderStatusName(order.status)} className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid"/>
              <div className="ml-1 text-gray-500"><UnfoldMoreHorizontalIcon/></div>
            </div>
          </label>

          <label className="block mx-4 my-4">
            <div className="text-xs text-gray-500">Klient</div>
            <div className="flex items-center">
              <div className="opacity-50 w-10"><AccountTieIcon/></div>
              <input type="text" defaultValue="Jan Kowalski" className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid"/>
            </div>
          </label>

          <label className="block mx-4 my-4">
            <div className="text-xs text-gray-500">Uwagi</div>
            <div className="flex items-start">
              <div className="opacity-50 w-10 py-1"><CommentTextOutlineIcon/></div>
              <textarea defaultValue="" className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid resize-none" rows={3}/>
            </div>
          </label>
        </div>
        <div className="flex-1">
          <label className="block mx-4 my-4">
            <div className="text-xs text-gray-500">Turbosprężarka</div>
            <div className="flex items-center">
              <div className="opacity-50 w-10"><CarTurbochargerIcon/></div>
              <input defaultValue="Audi / 876512311" type="text" className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid"/>
              <div className="ml-1 text-gray-500"><UnfoldMoreHorizontalIcon/></div>
            </div>
          </label>

          <label className="block mx-4 my-4">
            <div className="text-xs text-gray-500">Powód usterki</div>
            <div className="flex items-center">
              <div className="opacity-50 w-10"><MessageAlertOutlineIcon/></div>
              <input defaultValue="" type="text" className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid"/>
              <div className="ml-1 text-gray-500"><UnfoldMoreHorizontalIcon/></div>
            </div>
          </label>

          <label className="block mx-4 my-4">
            <div className="text-xs text-gray-500">Technik</div>
            <div className="flex items-center">
              <div className="opacity-50 w-10"><AccountHardHatIcon/></div>
              <input type="text" className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid"/>
              <div className="ml-1 text-gray-500"><UnfoldMoreHorizontalIcon/></div>
            </div>
          </label>

          <label className="block mx-4 my-4">
            <div className="text-xs text-gray-500">Sprzedawca</div>
            <div className="flex items-center">
              <div className="opacity-50 w-10"><FaceAgentIcon/></div>
              <input type="text" className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid"/>
              <div className="ml-1 text-gray-500"><UnfoldMoreHorizontalIcon/></div>
            </div>
          </label>
        </div>
      </div>

      <footer className="flex justify-between items-center px-4 py-4 bg-gray-100 rounded-b-lg">
        <div>
          <button className="ml-1 p-1 text-gray-400 hover:text-gray-500 transition-colors"><TrashCanOutlineIcon/></button>
        </div>
        <div>
          <button className="px-3 py-1 rounded bg-green-400 hover:bg-green-500 active:bg-green-600 text-white transition-colors" onClick={()=> close()}>Zapisz</button>
          <button className="px-2 ph-1 ml-2" onClick={()=> close()}>Anuluj</button>
        </div>
      </footer>
    </div>
  )
});

export function showOrderDialog({store, order}) {
  return openModal(
    ({ close }) => <OrderDialog order={order} close={close}/>,
    {
      transitionName: 'scale',
      autoDismissable: false,
    },
  );
}