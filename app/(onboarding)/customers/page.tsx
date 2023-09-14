// import CustomInput from "@components/forms/custom-input.component";
// import CustomerModal from "@components/forms/customer-modal.component";
import { Icon } from "@components/icon.component";

export default function CustomersPage() {
  return (
    <>
      <div className="absolute left-[220px] top-12 right-0 bottom-0 text-black02">
        <header className="h-[212px] p-5 bg-gray01">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-medium">Clients</h3>
            <div className="flex items-center gap-[1px]">
              <button
                type="button"
                className="text-white font-semibold px-4 py-1.5 rounded-l rounded-r-sm bg-green02 transition-all hover:bg-green03"
              >
                New client
              </button>
              <button
                type="button"
                className="text-white font-semibold px-2 py-1.5 rounded-l-sm rounded-r bg-green02 transition-all hover:bg-green03"
              >
                <span>
                  <Icon
                    name="arrow-down"
                    width={24}
                    height={24}
                    color="white"
                  />
                </span>
              </button>
            </div>
          </div>
        </header>

        {/** main content */}
        <div className="py-14 px-11">
          {/** content options */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center border border-gray02 w-72 py-1.5 px-2 rounded-[3px] text-sm text-black01 hover:shadow-search">
              <input className="flex-1 focus:outline-none" />
              <span>
                <Icon name="search" width={22} height={22} />
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="p-1.5 rounded cursor-pointer hover:bg-gray01">
                <Icon name="print" width={24} height={24} />
              </span>
              <span className="p-1.5 rounded cursor-pointer hover:bg-gray01">
                <Icon name="export" width={24} height={24} />
              </span>
            </div>
          </div>

          {/** content header */}
          <div className="flex mb-2">
            <div className="flex flex-1 items-center text-xs leading-4 font-bold">
              <span className="uppercase">Name</span>
              <span className="text-gray04 rounded hover:bg-gray02a cursor-pointer">
                <Icon name="filter-arrow-up-down" width={20} height={20} />
              </span>
            </div>
            <div className="flex flex-1 items-center text-xs leading-4 font-bold">
              <span className="uppercase">Company name</span>
              <span className="text-gray04 rounded hover:bg-gray02a cursor-pointer">
                <Icon name="filter-arrow-up-down" width={20} height={20} />
              </span>
            </div>
            <div className="flex flex-1 items-center text-xs leading-4 font-bold">
              <span className="uppercase">Phone</span>
            </div>
            <div className="flex flex-1 items-center text-xs leading-4 font-bold">
              <span className="uppercase">Currency</span>
            </div>
            <div className="flex flex-1 items-center text-xs leading-4 font-bold">
              <span className="uppercase">Open balance</span>
              <span className="text-gray04 rounded hover:bg-gray02a cursor-pointer">
                <Icon name="filter-arrow-up-down" width={20} height={20} />
              </span>
            </div>
            <div className="flex flex-1 justify-end items-center text-xs leading-4 font-bold">
              <span className="uppercase">Action</span>
            </div>
          </div>
        </div>
      </div>

      {/**<CustomerModal />*/}
    </>
  );
}
