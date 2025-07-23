import { NumberInput } from "@/components/numberInput";
import { MAX_PLAYERS_ENTRY } from "../consts";
import { Input } from "@heroui/input";
import { useFormContext } from "react-hook-form";
import { TeamEntryType } from "../types";
import { InputController } from "@/components/inputController";

export const PlayerEntryCard = ({ isHomeTeam }: { isHomeTeam: boolean }) => {
  const { control } = useFormContext<TeamEntryType>();
  const fieldName = isHomeTeam ? "homeTeam.players" : "awayTeam.players";

  return (
    <div>
      <p className="text-lg mb-4">Number</p>
      {Array.from({ length: MAX_PLAYERS_ENTRY }, (_, index) => (
        <div
          className="flex flex-row gap-4 items-center mb-4"
          key={Math.random()}
        >
          <InputController
            control={control}
            name={`${fieldName}.${index}.number`}
            type="number"
          />
          <InputController
            control={control}
            name={`${fieldName}.${index}.name`}
          />
        </div>
      ))}
    </div>
  );
};
