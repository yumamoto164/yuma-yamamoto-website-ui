import { Card, CardHeader } from "@heroui/card";
import { PlayerEntryCard } from "./playerEntryCard";
import { InputController } from "@/components/inputController";
import { useFormContext } from "react-hook-form";
import { TeamEntryType } from "../types";

export const TeamEntryCard = () => {
  const { control } = useFormContext<TeamEntryType>();

  return (
    <Card fullWidth={true}>
      <CardHeader className="flex gap-3 items-center justify-center">
        <div className="flex flex-col">
          <p className="text-lg">Soccer Expected Goals Collection</p>
          <p className="text-small text-default-500">
            Please Enter the team names, player names, and player numbers to
            start
          </p>
        </div>
      </CardHeader>
      <div className="flex flex-row gap-10 p-4 justify-center items-center">
        <Card fullWidth={true}>
          <div className="flex flex-col">
            <p className="text-lg">Home</p>
            <InputController control={control} name="homeTeam.teamName" />
            <div className="mt-4">
              <PlayerEntryCard isHomeTeam={true} />
            </div>
          </div>
        </Card>
        <Card fullWidth={true}>
          <div className="flex flex-col">
            <p className="text-lg">Away</p>
            <InputController control={control} name="awayTeam.teamName" />
            <div className="mt-4">
              <PlayerEntryCard isHomeTeam={false} />
            </div>
          </div>
        </Card>
      </div>
    </Card>
  );
};
