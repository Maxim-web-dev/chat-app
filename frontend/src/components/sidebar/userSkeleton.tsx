const UserSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="animate-pulse bg-muted h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <div className="animate-pulse rounded-md bg-muted h-4 w-[250px]" />
        <div className="animate-pulse rounded-md bg-muted h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default UserSkeleton;
