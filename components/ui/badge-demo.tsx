import { Badge } from '@/components/ui/badge-2';

export default function BadgeDemo() {
  return (
    <div className="flex items-center gap-4 p-8 bg-slate-50 rounded-xl my-8">
      <Badge variant="primary" appearance="outline">
        Primary
      </Badge>
      <Badge variant="success" appearance="outline">
        Success
      </Badge>
      <Badge variant="warning" appearance="outline">
        Warning
      </Badge>
      <Badge variant="info" appearance="outline">
        Info
      </Badge>
      <Badge variant="destructive" appearance="outline">
        Destructive
      </Badge>
    </div>
  );
}
