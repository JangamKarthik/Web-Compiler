import { Code, Copy, LoaderCircle, Save, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import toast, { Toaster } from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import {
  compilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HelperHeader() {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/compiler/save", {
        fullCode: fullCode,
      });
      console.log(response.data);
      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    } finally {
      setSaveLoading(false);
    }
  };
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="__helper_header h-[50px] bg-black text-white p-2 mx-2 flex justify-between items-center">
        <div className="__btn_container flex justify-between items-center gap-3">
          <Button
            onClick={handleSaveCode}
            className="flex justify-center items-center gap-2"
            variant="success"
            disabled={saveLoading}
          >
            {saveLoading ? (
              <>
                <LoaderCircle className="animate-spin" /> Saving
              </>
            ) : (
              <>
                <Save size={16} />
                Save
              </>
            )}{" "}
          </Button>
          <Dialog>
            <DialogTrigger className="whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 flex justify-center items-center gap-2" onClick={handleSaveCode}>
              {""}
              <Share2 size={14} />
              Share
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex gap-1 justify-center items-center">
                  <Code />
                  Share your code!
                </DialogTitle>
                <DialogDescription>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      disabled
                      className="w-full px-2 py-2 rounded-md text-slate-300 bg-slate-800 select-none"
                      value={window.location.href}
                    />
                    <Button
                      variant="outline"
                      onClick={() => {
                        window.navigator.clipboard.writeText(
                          window.location.href
                        );
                        toast.success("URL copied!", {
                          style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                          },
                        });
                      }}
                    >
                      <Copy size={15} />
                    </Button>
                  </div>

                  <p className="text-center my-2">
                    Share this URL to share your current code
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="__tab_switcher flex justify-center items-center gap-1">
          <small>Current Language:</small>
          <Select
            defaultValue={currentLanguage}
            onValueChange={(value) =>
              dispatch(
                updateCurrentLanguage(
                  value as compilerSliceStateType["currentLanguage"]
                )
              )
            }
          >
            <SelectTrigger className="w-[100px] bg-gray-800 focus:ring-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}