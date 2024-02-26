interface CodeProps {
  outputDetails: {
    status: { id: number };
    compile_output: string;
    stdout: string;
    stderr: string;
  };
}

const OutputWindow = (props: CodeProps): JSX.Element => {
  const getOutput = () => {
    const statusId = props.outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return <pre>{atob(props.outputDetails?.compile_output)}</pre>;
    } else if (statusId === 3) {
      return (
        <pre>
          {atob(props.outputDetails.stdout) !== null
            ? `${atob(props.outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return <pre>{`Time Limit Exceeded`}</pre>;
    } else {
      return <pre>{atob(props.outputDetails?.stderr)}</pre>;
    }
  };
  return (
    <>
      <h1 className="text-xl font-bold ml-2">Output:</h1>
      <div className="h-[90%] border-small border-slate-300 rounded-small p-5 overflow-scroll text-small">
        {props.outputDetails ? <>{getOutput()}</> : null}
      </div>
    </>
  );
};

export default OutputWindow;