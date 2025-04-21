import AnalyticsChart from "./AnalyticsChart";

function ReportsDashboardView() {
  return (
    <>
      <div className="overflow-y-hidden px-5 mt-3">ReportsDashboard</div>
      <AnalyticsChart type="true" />
      <AnalyticsChart />
    </>
  );
}

export default ReportsDashboardView;
