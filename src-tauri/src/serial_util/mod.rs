use serialport::available_ports;
use std::io;

/// Lists the names of all available serial ports on the system.
///
/// # Returns
/// 
/// Returns a `Result` containing a vector of serial port names as `String`s if successful,
/// or an `io::Error` if an error occurs while querying available ports.
///
/// # Errors
///
/// Returns an error if the serial port enumeration fails.
///
pub fn list_serial_ports() -> io::Result<Vec<String>> {
    let ports = available_ports().map_err(|e| io::Error::new(io::ErrorKind::Other, e))?;
    let port_names = ports
        .into_iter()
        .map(|port| port.port_name)
        .collect();
    Ok(port_names)
}