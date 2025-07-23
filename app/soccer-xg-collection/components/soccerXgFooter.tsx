import { Button } from "@heroui/button";

export const SoccerXgFooter = ({
  onClick,
  isPlayerEntryOpen,
}: {
  onClick: () => void;
  isPlayerEntryOpen: boolean;
}) => {
  const buttonText = isPlayerEntryOpen ? "Next" : "Back";

  return <Button onPress={onClick}>{buttonText}</Button>;
};
