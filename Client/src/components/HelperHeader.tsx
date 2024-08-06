import { Save, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HelperHeader() {
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 mx-2 flex justify-between items-center">
      <div className="__btn_container flex justify-between items-center gap-3">
        <Button
          className="flex justify-center items-center gap-2"
          variant="success"
        >
          Save <Save size={16} />
        </Button>
        <Button
          className="flex justify-center items-center gap-2"
          variant="secondary"
        >
          <Share2 size={14} />
          Share
        </Button>
      </div>
      <div className="__tab_switcher flex justify-center items-center gap-1">
        <small>Current Language:</small>
        <Select defaultValue="HTML">
          <SelectTrigger className="w-[100px] bg-gray-800 focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="HTML">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
