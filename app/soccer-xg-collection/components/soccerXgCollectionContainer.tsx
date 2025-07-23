"use client";
import { WithConditional } from "@/components/withConditional";
import { useState } from "react";
import { PlayerEntry } from "./playerEntry";
import { FormProvider, useForm } from "react-hook-form";
import { TeamEntryType } from "../types";
import { createDefaultPlayerList } from "../consts";
import { SoccerXgFooter } from "./soccerXgFooter";

export const SoccerXgCollectionContainer = () => {
  const [isPlayerEntryOpen, setIsPlayerEntryOpen] = useState(true);
  const methods = useForm<TeamEntryType>({
    defaultValues: {
      homeTeam: {
        teamName: "",
        players: createDefaultPlayerList(),
      },
      awayTeam: {
        teamName: "",
        players: createDefaultPlayerList(),
      },
    },
  });
  const { getValues } = methods;

  const handleChangePlayerEntryOpen = () => {
    setIsPlayerEntryOpen(!isPlayerEntryOpen);
    const teamEntryValues = getValues();
    console.log("Team Entry Values:", teamEntryValues);
  };

  return (
    <>
      <FormProvider {...methods}>
        <WithConditional when={isPlayerEntryOpen}>
          <PlayerEntry />
        </WithConditional>
        <WithConditional when={!isPlayerEntryOpen}>
          <div>No player entry is open.</div>
        </WithConditional>
        <SoccerXgFooter
          onClick={handleChangePlayerEntryOpen}
          isPlayerEntryOpen={isPlayerEntryOpen}
        />
      </FormProvider>
    </>
  );
};
