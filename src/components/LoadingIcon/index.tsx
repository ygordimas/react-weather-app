import React from "react";
import { Spinner9 } from "@styled-icons/icomoon/Spinner9";
import { LoadingIconContainer } from "./styles";

export function LoadingIcon() {
  return (
    <LoadingIconContainer>
      <Spinner9 size={"10rem"} />
    </LoadingIconContainer>
  );
}
