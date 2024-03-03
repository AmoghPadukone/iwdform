import { CopyIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ShowQR() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Payment QR Code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Gpay QR Code</DialogTitle>
          <DialogDescription>
            Once paid please upload the screenshot 
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <img src="/images/gpay.jpeg" alt="" />
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
