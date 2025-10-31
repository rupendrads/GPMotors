import OptOut from "@/components/OptOut";
import React, { Suspense } from "react";

function OptOutPage() {
  return (
    <main>
      <Suspense>
        <OptOut />
      </Suspense>
    </main>
  );
}

export default OptOutPage;
