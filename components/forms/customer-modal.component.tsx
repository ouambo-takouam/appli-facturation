import { Icon } from "@components/icon.component";
import CustomInput from "./custom-input.component";
import CustomSelect from "./custom-select.component";
import CustomTextarea from "./custom-textarea.component";

export default function CustomerModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40">
      <div className="fixed right-0 top-0 bottom-0 w-[36%] text-gray04 bg-white shadow-md">
        {/** header */}
        <div className="fixed left-[64%] right-0 h-14 px-[14px] py-5 flex items-center shadow-sm">
          <span className="flex-1 font-semibold text-xl text-center">
            Client
          </span>
          <span className="cursor-pointer p-1 rounded hover:bg-gray02">
            <Icon name="close" width={20} height={20} />
          </span>
        </div>

        {/** content */}
        <div className="absolute p-6 top-14 bottom-16 left-0 right-0 overflow-auto">
          {/** (Nom et coordonnées) */}
          <div className="rounded pb-4 shadow-box mb-6">
            <div className="flex items-center gap-3 py-3 px-4 text-black02 cursor-pointer hover:bg-gray01">
              <span>
                <Icon name="address" width={24} height={24} />
              </span>
              <span className="flex-1 font-bold">Nom et coordonnées</span>
              <span>
                <Icon name="arrow-down" width={24} height={24} />
              </span>
            </div>

            <div className="px-6">
              <div className="flex items-center mb-4 gap-x-4">
                <CustomInput label="Nom" />
                <CustomInput label="Prénom" />
                <CustomSelect label="Nom à afficher du client *" />
              </div>
              <div className="flex items-center mb-4 gap-x-4">
                <CustomInput label="Nom de l'entreprise" />
                <CustomInput label="E-mail" />
              </div>
              <div className="flex items-center mb-4 gap-x-4">
                <CustomInput label="Numéro de téléphone" />
                <CustomInput label="Site Web" />
              </div>
              <div className="flex items-center mb-4 gap-x-4">
                <CustomInput label="Autre" />
              </div>
            </div>
          </div>

          {/** (Adresses) */}
          <div className="rounded pb-4 shadow-box mb-6">
            <div className="flex items-center gap-3 py-3 px-4 text-black02 cursor-pointer hover:bg-gray01">
              <span>
                <Icon name="place" width={24} height={24} />
              </span>
              <span className="flex-1 font-bold">Adresses</span>
              <span>
                <Icon name="arrow-down" width={24} height={24} />
              </span>
            </div>

            <div className="px-6">
              <h3 className="leading-8 font-bold text-sm text-black03">
                Adresse de faturation
              </h3>
              <div className="flex items-center mb-4 gap-x-4">
                <CustomInput label="Adresse postale 1" />
                <CustomInput label="Adresse postale 2" />
              </div>
              <div className="flex items-center mb-4 gap-x-4">
                <CustomInput label="Ville" />
                <CustomInput label="Province" />
              </div>
              <div className="flex items-center mb-4 gap-x-4">
                <CustomInput label="Code postal" />
                <CustomInput label="Pays" />
              </div>
            </div>
          </div>

          {/** (Pieces jointes) */}
          <div className="rounded pb-4 shadow-box mb-6">
            <div className="flex items-center gap-3 py-3 px-4 text-black02 cursor-pointer hover:bg-gray01">
              <span>
                <Icon name="attachment" width={24} height={24} />
              </span>
              <span className="flex-1 font-bold">Notes et pièces jointes</span>
              <span>
                <Icon name="arrow-down" width={24} height={24} />
              </span>
            </div>

            <div className="px-6">
              <div className="flex items-center mb-4 gap-x-4">
                <CustomTextarea label="Notes" />
              </div>
              <div className="flex items-center mb-4 gap-x-4"></div>
            </div>
          </div>
        </div>

        {/** footer */}
        <div className="fixed left-[64%] right-0 bottom-0 h-16 flex items-center px-4 justify-end shadow-md border">
          <button
            type="button"
            className="text-white font-semibold px-4 py-1 rounded bg-green02 transition-all hover:bg-green03"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
