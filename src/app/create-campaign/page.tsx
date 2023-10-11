import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CreateCampaign = () => {
  return (
    <div className="text-end ">
      <Button>
        <Link href={""}>Create Campaign</Link>
      </Button>
    </div>
  );
};

export default CreateCampaign;
