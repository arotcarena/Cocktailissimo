import { useState } from "react";
import { useOpenState } from "../state/useOpenState";

export const useRemover = () => {
    const [confirmationIsOpen, openConfirmation, closeConfirmation] = useOpenState(false);
    const [isRemoving, setRemoving] = useState(false);

    return {confirmationIsOpen, openConfirmation, closeConfirmation, isRemoving, setRemoving};
}

